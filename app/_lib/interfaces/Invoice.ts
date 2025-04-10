export interface IInvoice {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  status: "pending" | "paid";
}
