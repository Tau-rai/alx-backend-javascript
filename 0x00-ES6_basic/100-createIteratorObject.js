export default function createIteratorObject(report) {
    return Object.values(report.allEmployees).map((employees) => {
        return employees[Symbol.iterator]();
    });
}