// Local database enteries
const internetSpeed: [string, string, string] = ['15Mbps', '30Mbps', '50Mbps'],
    paymentMethod: [string, string, string, string] = ['Raast', 'JazzCash', 'Physical', 'N/A'],
    cardBanner: [string, string, string] = ['PURCHASED EXTRA', 'ACTIVATED', 'EXPIRED'];
// Data criteria
// [0:speed, 1:paidAmount, 2:balance, 3:paymentMethod, 4:transactionId, 5:activationDate, 6:duration, 7:Used while expired]
// [0, 1400, 0, 1,'3245435345', 1738385036119, 30, false],
// [0, 1400, 0, 1,'3245435345', 1738385036119, 30, false],
const userData: [number, number, number, number, boolean, number, number, number][] =[
    [0, 1400, 0, 2,false,   1751901503000, 30, 0],
    [0, 0, -700, 3,false,   1749272400000, 30, 0],
    [0, 700, 0, 1,false,    1746900540000, 26, 4],
    [0, 720, 0, 2,false,    1743769644000, 30, 0],
    [0, 680, -20, 2,false,  1741168800000, 30, 0],
    [0, 1400, 0, 2,false,   1738520221836, 30, 0],
    [0, 0, -700, 2,false,   1735498800000, 30, 0]
];