var textonly = false;

        var start = function() {
            var i = "Hello",
                j = "Not much to see in here, but look no errors. If you wish to get in contact please send an e-mail to alexwatto96@gmail.com";
            if ((window.chrome || window.safari) && !textonly) {
                var l = 'font-family:helvetica; font-size:20px; ';
                [
                    [i, l + 'font-size: 50px; font-weight: bold; color: blue; -webkit-text-stroke: 1px black;'],
                    [j, l + ''],
                ].map(function(r) {
                    setTimeout(console.log.bind(console, '\n%c' + r[0], r[1]));
                });
            } else {
                var m = ['', ' .d8888b.  888                       888', 'd88P  Y88b 888                       888', 'Y88b.      888                       888', ' "Y888b.   888888  .d88b.  88888b.   888', '    "Y88b. 888    d88""88b 888 "88b  888', '      "888 888    888  888 888  888  Y8P', 'Y88b  d88P Y88b.  Y88..88P 888 d88P', ' "Y8888P"   "Y888  "Y88P"  88888P"   888', '                           888', '                           888', '                           888'],
                    n = ('' + j).match(/.{35}.+?\s+|.+$/g),
                    o = Math.floor(Math.max(0, (m.length - n.length) / 2));
                for (var p = 0; p < m.length || p < n.length; p++) {
                    var q = m[p];
                    m[p] = q + new Array(45 - q.length).join(' ') + (n[p - o] || '');
                }
                console.log('\n\n\n' + m.join('\n') + '\n\n');
                return;
            }
        }();