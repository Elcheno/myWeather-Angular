import { Today } from "./today"

export interface Forecast {
    days: {
        date:string,
        weather: Today
    }[]
}
