interface User {
  readonly dbId: number; //readonly property cannot be changed after initialization
  email: string;
  userId: number;
  googleId?: string; //optional property
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

const anurag: User = {
  dbId: 1,
  email: "test@test.com",
  userId: 21,
  startTrail: () => "Trail started",
  getCoupon: (name: "andy10", dis: 10) => {
    return 10; //assume 10 means 10% discount
  },
};
anurag.email = "example@example.com";
// anurag.dbId = 2; //throws an error since dbId is a readonly property
