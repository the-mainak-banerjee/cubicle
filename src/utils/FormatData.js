export default function formatDate(serverDate) {
    const date = new Date(serverDate?.toDate())
    const formatedHour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    const formatedMins = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    const formatedDate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    const formatedDay = date.getDay()
    const formatedMonth = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth()+1
    const formatedYear = date.getFullYear()
    const formatedFullDate = date.toDateString()

    return{
        formatedHour,
        formatedMins,
        formatedDay,
        formatedDate,
        formatedMonth,
        formatedYear,
        formatedFullDate
    }

}