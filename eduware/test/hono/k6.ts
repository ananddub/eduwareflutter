import http from 'k6/http';
import { Trend } from 'k6/metrics';
import { check } from 'k6';

let responseTime4000 = new Trend('nest');
let responseTime3000 = new Trend('hono');
let responseTime8010 = new Trend('google');

export let options = {
    vus: 100000,
    duration: '20s',
};

export default function () {
    let res1 = http.get('http://localhost:4000/healthz');
    responseTime4000.add(res1.timings.duration);
    check(res1, {
        'status 4000 is 200': (r) => r.status === 200,
    });

    let res2 = http.get('http://localhost:3000');
    responseTime3000.add(res2.timings.duration);
    check(res2, {
        'status 3000 is 200': (r) => r.status === 200,
    });
}
