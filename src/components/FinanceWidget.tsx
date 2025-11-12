import { FC } from "react";

const finances = [
    { name: 'Зарплата', sum: 50000, type: 'income' },
    { name: 'Еда', sum: -8000, type: 'expense' },
    { name: 'Аренда', sum: -20000, type: 'expense' },
];

export const FinanceWidget: FC = () => {
    const total = finances.reduce((acc, item) => acc + item.sum, 0);
    return <div style={{ padding: 20, border: '1px solid gray', width: 500 }}>
        <h3>Финансы</h3>
        <p style={{ fontSize: 20, fontWeight: 'bold', color: total > 0 ? 'green' : 'red' }}>
            Итого: {total} ₽
        </p>
        {finances.map((item, i) => (
            <div key={i} style={{ margin: '10px 0' }}>
                <span>{item.name}: </span>
                <span style={{ color: item.type === 'income' ? 'green' : 'red' }}>
                    {item.sum} ₽
                </span>
            </div>
        ))}
    </div>
}