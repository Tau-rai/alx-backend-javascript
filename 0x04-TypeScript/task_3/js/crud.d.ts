import { RowId, RowElement } from './interface';

declare module 'crud' {
    export function insertRow(row: RowElement): RowId;
    export function deleteRow(rowId: RowId): void;
    export function updateRow(rowId: RowId, row: RowElement): RowId;
}