import { format } from "date-fns";

export const formatDate  = (date: Date) => {
    const d = new Date(date)
    const formattedDate = format(d, "dd MMM',' yyyy. hh:mmaaa");
    return formattedDate
}