import { format, parseISO } from 'date-fns';

export const formatDate = (dateString: string): string => {
    return format(parseISO(dateString), 'MMMM dd, yyyy');
};

export const formatTime = (dateString: string): string => {
    return format(parseISO(dateString), 'hh:mm a');
};

export const getCurrentDate = (): string => {
    return format(new Date(), 'yyyy-MM-dd');
};

export const getCurrentTime = (): string => {
    return format(new Date(), 'HH:mm');
};