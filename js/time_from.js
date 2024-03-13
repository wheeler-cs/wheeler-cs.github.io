
function update_experience() {
    document.getElementById("os_windows").textContent = calc_years_experience(1, 2014);
    document.getElementById("os_linux").textContent = calc_years_experience(10, 2016);
    document.getElementById("lang_cpp").textContent = calc_years_experience(1, 2019);
    document.getElementById("lang_c").textContent = calc_years_experience(1, 2020);
    document.getElementById("lang_python").textContent = calc_years_experience(8, 2022);
    document.getElementById("tech_gcloud").textContent = calc_years_experience(1, 2023);
}

function calc_years_experience(start_month, start_year) {
    today = new Date();

    // Calculate amount of experience as both year and month
    month_diff = (today.getMonth() + 1) - start_month;
    year_diff = today.getFullYear() - start_year;

    // Adjust years of experience based on month value
    if(month_diff < 0)
        year_diff -= 1;

    experience = "Some";

    if(year_diff <= 0)
        experience = (month_diff * -1).toString() + " months";
    else if (year_diff == 1)
        experience = "1 year";
    else
        experience = year_diff.toString() + " years";

    return experience;
}
