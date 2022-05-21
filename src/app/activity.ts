export interface Activity {
    id: number;
    name: string;
    done: boolean;
    repeat: number;
    startDate: Date;
    lastDate?: Date | null;
    color: string;
}

export function daysBetween(now: Date, other: Date) {
    let diff = now.getTime() - other.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
}

function addDays(date: Date, days: number) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export function nextDay(activity: Activity) {
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    let days = daysBetween(today, activity.startDate);
    let offset = activity.repeat - (days % activity.repeat);
    return addDays(today, offset);
}