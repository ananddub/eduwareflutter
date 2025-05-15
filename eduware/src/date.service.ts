import * as moment from 'moment';
export function getYearRange(): string {
    const currentYear = moment().format('YYYY');
    const nextYear = moment().add(1, 'year').format('YYYY');
    return `${currentYear}-${nextYear}`;
}
