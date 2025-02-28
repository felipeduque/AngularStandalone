import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table } from 'primeng/table';
import { Customer, Representative } from '../../domain/customer';
import { CustomerGateway } from '../../gateways/customergateway';
import { ImportsModule } from '../../imports';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-table',
  imports: [CommonModule, ImportsModule, DropdownModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  providers: [CustomerGateway]
})
export class TableComponent implements OnInit {
  customers!: Customer[];

  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private customerGateway: CustomerGateway) {}

  ngOnInit() {
      this.customerGateway.getCustomersLarge().then((customers) => {
          this.customers = customers;
          this.loading = false;

          this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
      });

      this.representatives = [
          { name: 'Amy Elsner', image: 'amyelsner.png' },
          { name: 'Anna Fali', image: 'annafali.png' },
          { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
          { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
          { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
          { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
          { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
          { name: 'Onyama Limba', image: 'onyamalimba.png' },
          { name: 'Stephen Shaw', image: 'stephenshaw.png' },
          { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
      ];

      this.statuses = [
          { label: 'Unqualified', value: 'unqualified' },
          { label: 'Qualified', value: 'qualified' },
          { label: 'New', value: 'new' },
          { label: 'Negotiation', value: 'negotiation' },
          { label: 'Renewal', value: 'renewal' },
          { label: 'Proposal', value: 'proposal' }
      ];
  }

  clear(table: Table) {
      table.clear();
  }

  getSeverity(status: string): 'success' | 'info' | 'danger' | 'warn' | 'secondary' | 'contrast' {
      switch (status?.toLowerCase()) {
          case 'unqualified':
              return 'danger';
          case 'qualified':
              return 'success';
          case 'new':
              return 'info';
          case 'negotiation':
              return 'warn';
          case 'renewal':
          case 'proposal':
              return 'secondary';
          default:
              return 'secondary';
      }
  }
}
