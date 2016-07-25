import {NotificationRepository} from "./NotificationRepository";
import {AppNotification} from "../appNotification";


describe("NotificationRepository", () => {

    var objectUnderTest:NotificationRepository = null;


    beforeEach(() => {
        objectUnderTest = new NotificationRepository();
    });

    it("has a data source", () => {
        expect(objectUnderTest.notifications).not.toBeNull();
    });

    it("saves notifications to the data source", () => {
        spyOn(objectUnderTest.notifications, "push");
        let fakeNotification = new AppNotification("Fake", 1);
        objectUnderTest.saveNotification(fakeNotification);
        expect(objectUnderTest.notifications.push).toHaveBeenCalledWith(fakeNotification);
    });

    it("removes notifications from the data source", () => {
        let fakeNotification = new AppNotification("fake", 10);
        objectUnderTest.saveNotification(fakeNotification);
        spyOn(objectUnderTest.notifications, "splice");
        spyOn(fakeNotification, "isStarted");

        objectUnderTest.removeNotification(fakeNotification);

        expect(fakeNotification.isStarted).toHaveBeenCalled();
        expect(objectUnderTest.notifications.splice).toHaveBeenCalled();
    });

    it("stops started notifications before removal", () => {
        let fakeNotification = new AppNotification("fake", 10);
        fakeNotification.start();
        objectUnderTest.saveNotification(fakeNotification);
        spyOn(objectUnderTest.notifications, "splice");
        spyOn(fakeNotification, "isStarted").and.callThrough();
        spyOn(fakeNotification, "stop").and.callThrough();


        objectUnderTest.removeNotification(fakeNotification);

        expect(fakeNotification.isStarted).toHaveBeenCalled();
        expect(fakeNotification.stop).toHaveBeenCalled();
        expect(objectUnderTest.notifications.splice).toHaveBeenCalled();
    });

});