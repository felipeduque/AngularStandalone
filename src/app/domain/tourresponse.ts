export interface TourResponse<T> {
  data: T,
  message: string,
  success: boolean,
}