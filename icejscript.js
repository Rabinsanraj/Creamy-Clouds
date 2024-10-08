function add() {
    const btn = document.getElementById("vanila");
    const clk = document.getElementById("store");
    const spv = document.getElementById("spv");
    const btn2 = document.getElementById("v-reload");
    let cnt = 0;
    if (btn && clk && spv) {
        btn.addEventListener('click', () => {
            cnt++;
            const amt = 30;
            var tot = cnt * amt;
            clk.innerHTML = ("Vanila added : " + cnt + " " + "-" + " " + "Total : " + tot);
            var num = cnt;

            btn2.addEventListener('click', () => {
                num--;
                tot = num * amt;
                clk.innerHTML = ("Vanila added : " + num + " " + "-" + " " + "Total : " + tot);
            });
        });
    }

}

function add1() {
    const btn = document.getElementById("blueberry");
    const clk = document.getElementById("store1");
    const spb = document.getElementById("spb");
    const btn2 = document.getElementById("b-reload");
    let cnt = 0;
    if (btn && clk && spb) {
        btn.addEventListener('click', () => {
            cnt++;
            const amt = 50;
            var tot = cnt * amt;
            clk.innerHTML = ("Blueberry added : " + cnt + " " + "-" + " " + "Total : " + tot);
            var num = cnt;
            btn2.addEventListener('click', () => {
                num--;
                total = num * amt;
                clk.innerHTML = ("Blueberry added : " + num + " " + "-" + " " + "Total : " + total);
            });

        });

    }

}
