export interface AccountHistoryModel{
  accountNumber: string;
  operations: Operation[];
}

export interface Operation{
   type: string;
   accountNumber: string;
   amount: number;
}
