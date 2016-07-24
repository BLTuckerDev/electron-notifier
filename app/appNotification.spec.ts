import { AppNotification } from './appNotification'

describe("ApplicationNotification", () =>{

    it("has a message", () => {
        let testNotification = new AppNotification("My Message", 1);
        expect(testNotification.message).toEqual("My Message");
    });

    it("has a notification period", () =>{
        let testNotification = new AppNotification("My Message", 1);
        expect(testNotification.notificationPeriodInMinutes).toEqual(1);
    });

    it("is started", () => {
        let testNotification = new AppNotification("My Message", 1);
        testNotification.start()
        expect(testNotification.isStarted()).toBe(true);
    });

    it("is stopped", () => {
        let testNotification = new AppNotification("My Message", 1);
        expect(testNotification.isStarted()).toBe(false);
    });

});