//These queries are for avoiding overlaps of dates when you have a start and an end dates. In this case we are also validating on a shared value of Child ID as well (can of course be changed to another value)

//Query for no overlaps if original form has both start and end dates
queryObj.value =
    "[Child ID] eq '" +
    ChildID +
    "' AND [Date Start] le '" +
    DateStart +
    "' AND [Date End] IS NULL OR ([Child ID] eq '" +
    ChildID +
    "' AND  ('" +
    DateStart +
    "' BETWEEN [Date Start] and [Date End] OR '" +
    DateEnd +
    "' BETWEEN [Date Start] and [Date End] OR [Date Start] BETWEEN '" +
    DateStart +
    "' and '" +
    DateEnd +
    "' OR [Date End] BETWEEN '" +
    DateStart +
    "' and '" +
    DateEnd +
    "'))";

//Query for no overlaps if original form has no end date
if (DateEnd.trim() == "") {
    queryObj.value =
        "[Child ID] eq '" +
        ChildID +
        "' AND [Date Start] le '" +
        DateStart +
        "' AND [Date End] IS NULL OR ([Child ID] eq '" +
        ChildID +
        "' AND  ('" +
        DateStart +
        "' BETWEEN [Date Start] and [Date End] OR [Date Start] ge '" +
        DateStart +
        "'))";
}
