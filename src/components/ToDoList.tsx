import { useColorScheme } from "@mui/material";
import styled, { css } from "styled-components"
import { isDarkWithSystem } from "./ThemeButton";

const todo = [
    {
        task: 'Сделать ДЗ',
        isDone: true,
    },
    {
        task: 'Купить колу',
        isDone: true,
    },
    {
        task: 'Выпить колу',
        isDone: false,
    },
    {
        task: 'Доделать НИС а то щас уже 3 часа ужас',
        isDone: false,
    },
    {
        task: 'Сделать репо',
        isDone: true,
    },
]

interface TodoItem {
    task: string;
    isDone: boolean;
}

interface StyledProps {
    isDone: boolean;
    isDark?: boolean;
}

const TodoContainer = styled.div<{ isDark?: boolean }>`
    padding: 20px;
    background-color: ${props => props.isDark ? '#292929ff' : '#f5f5f5'};
    color: ${props => props.isDark ? '#ffffff' : '#000000'};
    min-height: 100vh;
`;

const TodoItem = styled.div<StyledProps>`
    padding: 10px;
    margin: 5px 0;
    border: 1px solid ${props => props.isDark ? '#444' : '#ddd'};
    border-radius: 4px;
    text-decoration: ${props => props.isDone ? 'line-through' : 'none'};
  
  ${props => {
        if (props.isDone) {
            return css`
                color: ${props.isDark ? '#888' : '#999'};
                background-color: ${props.isDark ? '#2a2a2a' : '#f9f9f9'};
            `;
        } else {
            return css`
                color: ${props.isDark ? '#ffffff' : '#000000'};
                background-color: ${props.isDark ? '#333' : '#fff'};
            `;
        }
    }}
  
  &:hover {
    background-color: ${props => props.isDark ? '#3a3a3a' : '#f0f0f0'};
  }
`;

const Title = styled.h2<{ isDark?: boolean }>`
    color: ${props => props.isDark ? '#ffffff' : '#000000'};
    margin-bottom: 20px;
`;

export const ToDoList: React.FC = () => {
    const { mode } = useColorScheme();
    const isDark = isDarkWithSystem(mode);

    return (
        <TodoContainer isDark={isDark}>
            <Title isDark={isDark}>Список Дел</Title>
            {todo.map((item: TodoItem, index: number) => (
                <TodoItem key={index} isDone={item.isDone} isDark={isDark}>
                    {item.task}
                </TodoItem>
            ))}
        </TodoContainer>
    );
};