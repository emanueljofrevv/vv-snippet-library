//PROCESS NAME for TEMPLATE NAME

//Template GUID goes here
const templateId = "f50312f2-d3b7-e911-a9a3-f615c1bebc5e";

//Form fields go here
const FieldNameVariable = VV.Form.GetFieldValue("FIELD NAME");

//Field mappings
const fieldMappings = [
    {
        sourceFieldName: "SOURCE FIELD NAME HERE",
        sourceFieldValue: FieldNameVariable,
        targetFieldName: "TARGET FIELD NAME HERE",
    },
    {
        sourceFieldName: "SOURCE FIELD NAME HERE",
        sourceFieldValue: FieldNameVariable,
        targetFieldName: "TARGET FIELD NAME HERE",
    },
];

//Call the fill in global script
VV.Form.Global.FillinAndRelateForm(templateId, fieldMappings);
