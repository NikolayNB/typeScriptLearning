var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 5] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 6] = "WINDOW";
    SeatChoice[SeatChoice["EMERGENCY_EXIT"] = 7] = "EMERGENCY_EXIT";
})(SeatChoice || (SeatChoice = {}));
var nikoSeat = SeatChoice.AISLE;
