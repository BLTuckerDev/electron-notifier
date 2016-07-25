import { NotificationItem } from "./NotificationItem.component"
import {AppNotification} from "../appNotification";


describe("NotificationItemComponent", () => {

    var objectUnderTest :NotificationItem = null;
    var appNotification :AppNotification = null;

    beforeEach(() => {
        objectUnderTest = new NotificationItem();
        appNotification = new AppNotification("Fake Notification", 1);
        objectUnderTest.appNotification = appNotification;
    });

    it("has an event emitter", () => {
        expect(objectUnderTest.deleteEvent).not.toBeNull();
    });

    it("onStart() should call start on the notification", () => {
        spyOn(appNotification, "start");
        objectUnderTest.onStart();
        expect(appNotification.start).toHaveBeenCalled();
    });

    it("onStop() should call stop on the notification", () => {
        spyOn(appNotification, "stop");
        objectUnderTest.onStop();
        expect(appNotification.stop).toHaveBeenCalled();
    });

    it("onDelete() should emit the delete event with the notification", () =>{
        spyOn(objectUnderTest.deleteEvent, "emit");
        objectUnderTest.onDelete();
        expect(objectUnderTest.deleteEvent.emit).toHaveBeenCalledWith(appNotification);
    });

});