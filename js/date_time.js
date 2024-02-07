
function insert_clock() {
    document.getElementById("local_clock").innerHTML = get_clock_string();
}

function get_clock_string() {
    date_time = new Date();
    time_hours = date_time.getHours();
    time_minutes = date_time.getMinutes();
    time_seconds = date_time.getSeconds();
    if(time_hours < 10) {
        time_hours = "0" + time_hours;
    }
    if(time_minutes < 10) {
        time_minutes = "0" + time_minutes;
    }
    if(time_seconds < 10) {
        time_seconds = "0" + time_seconds;
    }
    time_string = time_hours.toString() + ":" + time_minutes.toString() + ":" + time_seconds.toString();
    console.log("Time string:");
    console.log(time_string);
    return time_string;
}
