export function formatVND(amount: number | string): string {
    if (typeof amount === 'string') {
        amount = parseFloat(amount);
    }
    if (isNaN(amount)) return '';
    return amount.toLocaleString('vi-VN') + ' đ';
}
