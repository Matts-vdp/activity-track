export interface Activity {
    id: number;
    name: string;
    done: boolean;
    repeat: number;
    startDate: Date;
    lastDate?: Date | null;
}