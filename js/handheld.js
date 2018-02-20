var isStringDetected = function (value) {
            var regexp = new RegExp(value, "gi")
            return (regexp.test(navigator.appVersion) || regexp.test(navigator.userAgent)) ? true : false
        }
        var isTablet = function () {
            return (isStringDetected("iPad|Windows NT|Kindle|PlayBook") || (isStringDetected("Android") && !isStringDetected("Mobile"))) ? true : false
        }
        var isMobile = (!isTablet() && "undefined" != typeof window.orientation);
        iam_data = {
            st: (isMobile ? "mobjunge" : "jungesan"),
            cp: (isMobile ? "Seite/mobil" : "Seite/stationaer")
        }
                if (typeof iom !== 'undefined') {
            iom.c(iam_data, 1)
        }