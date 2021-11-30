export default interface Investment {
    id: number,
    investmentTitle: string,
    amount: number,
    weekly: boolean, // If not weekely then payments are added monthly
    recurringAmount: number
}
