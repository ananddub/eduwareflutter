import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
    vus: 20, // virtual users
    duration: "30s",
};

export default function () {
    let res4000 = http.get("http://localhost:4000/api/test");
    check(res4000, {
        "4000 status is 200": (r) => r.status === 200,
    });

    let res3000 = http.get("http://localhost:3000/api/test");
    check(res3000, {
        "3000 status is 200": (r) => r.status === 200,
    });

    sleep(1);
}
