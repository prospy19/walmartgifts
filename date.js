        function date() {
            var currentDate = new Date(new Date().getTime() + 1 * 60 * 60 * 500);
            var day = currentDate.getDate()
            var month = currentDate.getMonth()
            var year = currentDate.getFullYear()
            var montharray = new Array();
            montharray[0] = "January";
            montharray[1] = "February";
            montharray[2] = "March";
            montharray[3] = "April";
            montharray[4] = "May";
            montharray[5] = "June";
            montharray[6] = "July";
            montharray[7] = "August";
            montharray[8] = "September";
            montharray[9] = "October";
            montharray[10] = "November";
            montharray[11] = "December";
            document.write(day + " " + montharray[month] + " " + year)
        }