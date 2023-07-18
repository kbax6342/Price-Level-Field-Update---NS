/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/currentRecord', 'N/log', 'N/record', 'N/recordContext','N/search'],
    /**
 * @param{currentRecord} currentRecord
 * @param{log} log
 * @param{record} record
 * @param{recordContext} recordContext
     *
 */
    (currentRecord, log, record, recordContext, search) => {
        /**
         * Defines the function definition that is executed before record is loaded.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @param {Form} scriptContext.form - Current form
         * @param {ServletRequest} scriptContext.request - HTTP request information sent from the browser for a client action only.
         * @since 2015.2
         */
        const beforeLoad = (scriptContext) => {
            // var currentRecord = scriptContext.newRecord
            //
            // var idLookUp = currentRecord.getValue({fieldId: 'custitem_nsacs_lf_style_name'})
            //
            // if(idLookUp){
            //
            //
            //
            //     var fieldLookUp = search.lookupFields({
            //         type: search.Type.INVENTORY_ITEM,
            //         id: idLookUp,
            //         columns: ['name','custitem6','custitem7', 'custitem8','custitem9','custitem10', 'custitem12', 'custitem13',
            //             'custitem14', 'custitem15', 'custitem11']
            //     });
            //
            //     var priceID = 'price1'
            //
            //     var basePrice = fieldLookUp.custitem6
            //
            //     var onefourtyN = fieldLookUp.custitem7
            //
            //     var fourtyEightN = fieldLookUp.custitem8
            //
            //     var seventyTwoN = fieldLookUp.custitem9
            //
            //     var folletN = fieldLookUp.custitem10
            //
            //     var mDenPrice = fieldLookUp.custitem12
            //
            //     var rallyHousePrice = fieldLookUp.custitem13
            //
            //     var fanaticsPrice = fieldLookUp.custitem14
            //
            //     var fanInVenue = fieldLookUp.custitem15
            //
            //     var flcPrice = fieldLookUp.custitem11
            //
            //
            //
            //     for( var i = 0; i <= 200 ; i++){
            //
            //         var sublistValue = currentRecord.getSublistValue({
            //             sublistId: priceID,
            //             fieldId: 'pricelevel',
            //             line: i
            //         })
            //
            //         if(sublistValue == "1"){
            //             var number = onefourtyN * 1.111111
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if (sublistValue == "2"){
            //             var number = onefourtyN * 1.123596
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "3"){
            //             var number = onefourtyN * 1.136364
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "4"){
            //             var number = onefourtyN * 1.136364
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "5"){
            //             var number = onefourtyN * 1.149425
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "6"){
            //             var number = onefourtyN * 1.162791
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "7"){
            //             var number = onefourtyN * 1.176471
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "8"){
            //             var number = onefourtyN * 1.190476
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue =="9"){
            //             var number = onefourtyN * 1.204819
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:   Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "10"){
            //             var number = onefourtyN * 1.219512
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "11"){
            //             var number = onefourtyN * 1.25
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "12"){
            //             var number = onefourtyN * 1.265823
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "13"){
            //             var number = onefourtyN * 1.315789
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "14"){
            //             var number = onefourtyN * 1.333333
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "15"){
            //             var number = onefourtyN * 1.081081
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "16"){
            //             var number = onefourtyN * 1.315789
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue =="17"){
            //             var number = onefourtyN * 1.086957
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "18"){
            //             var number = onefourtyN * 1.098901
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "19"){
            //             var number = onefourtyN
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "20"){
            //             var number = onefourtyN * 1.1
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "21"){
            //             var number = onefourtyN * 1.07
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "22"){
            //             var number = fourtyEightN * 1.111111
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "23"){
            //             //48 11%
            //             var number = fourtyEightN * 1.123596
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "24"){
            //             var number = fourtyEightN * 1.136364
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "25"){
            //             var number = fourtyEightN * 1.149425
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "21"){
            //             var number = onefourtyN * 1.07
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "22"){
            //             var number = onefourtyN * 1.111111
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "23"){
            //             var number = onefourtyN * 1.123596
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "24"){
            //             var number = onefourtyN * 1.136364
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "25"){
            //             var number = onefourtyN * 1.149425
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "26"){
            //             var number = onefourtyN * 1.162791
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "27"){
            //             var number = onefourtyN * 1.176471
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "28"){
            //             var number = onefourtyN * 1.190476
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "29"){
            //             var number = onefourtyN * 1.204819
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "30"){
            //             var number = onefourtyN * 1.219512
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "31"){
            //             var number = onefourtyN * 1.25
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "32"){
            //             var number = fourtyEightN * 1.282051
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "33"){
            //             var number = fourtyEightN * 1.298701
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "34"){
            //             var number = fourtyEightN * 1.315789
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "35"){
            //             var number = fourtyEightN * 1.081081
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "36"){
            //             var number = fourtyEightN * 1.075269
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "37"){
            //             var number = fourtyEightN * 1.081081
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "38"){
            //             var number = fourtyEightN * 1.086957
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "39"){
            //             var number = fourtyEightN * 1.098901
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "92"){
            //             var number = 0
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "40"){
            //             var number = fourtyEightN
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "41"){
            //             var number = fourtyEightN * 1.1
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "42"){
            //             var number = fourtyEightN * 1.07
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "43"){
            //             var number = seventyTwoN* 1.111111
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "44"){
            //             var number = seventyTwoN * 1.111111
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "45"){
            //             var number = seventyTwoN * 1.123596
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "46"){
            //             var number = seventyTwoN * 1.149425
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "47"){
            //             var number = seventyTwoN * 1.162791
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "48"){
            //             var number = seventyTwoN * 1.176471
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "49"){
            //             var number = seventyTwoN * 1.190476
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "50"){
            //             var number = seventyTwoN * 1.204819
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "51"){
            //             var number = seventyTwoN * 1.219512
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "52"){
            //             var number = seventyTwoN * 1.25
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "53"){
            //             var number = seventyTwoN * 1.282051
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "54"){
            //             var number = seventyTwoN * 1.298701
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "55"){
            //             var number = seventyTwoN * 1.315789
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "56"){
            //             //72 25%
            //             var number = seventyTwoN * 1.333333
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value: Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "57"){
            //             var number = seventyTwoN * 1.075269
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "58"){
            //             var number = seventyTwoN * 1.081081
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "59"){
            //             var number = seventyTwoN * 1.086957
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "60"){
            //             var number = seventyTwoN * 1.098901
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "61"){
            //             var number = seventyTwoN
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "62"){
            //             var number = seventyTwoN * 1.1
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }
            //         else if(sublistValue == "63"){
            //             var number = seventyTwoN * 1.07
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "68"){
            //             var number = flcPrice
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }
            //         else if(sublistValue == "69"){
            //             var number = folletN * 1.111111
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "89"){
            //             var number = folletN * 1.111111
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "70"){
            //             var number = folletN * 1.123596
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "90"){
            //             var number = folletN * 1.129944
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "71"){
            //             var number = folletN * 1.136364
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "72"){
            //             var number = folletN * 1.149425
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "73"){
            //             var number = folletN * 1.162791
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "74"){
            //             var number = folletN * 1.176471
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "75"){
            //             var number = folletN * 1.190476
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "76"){
            //             var number = folletN * 1.204819
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "77"){
            //             var number = folletN * 1.219512
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "78"){
            //             var number = onefourtyN * 1.25
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "79"){
            //             var number = onefourtyN * 1.282051
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "80"){
            //             var number = onefourtyN * 1.298701
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "81"){
            //             var number = onefourtyN * 1.315789
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "82"){
            //             var number = onefourtyN * 1.333333
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value: Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "93"){
            //             var number = onefourtyN * 1.06955
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "83"){
            //             var number = onefourtyN * 1.075269
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "84"){
            //             var number = onefourtyN * 1.081081
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "85"){
            //             var number = onefourtyN * 1.092896
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "86"){
            //             var number = onefourtyN * 1.098901
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "88"){
            //             var number = basePrice
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "95"){
            //             var number = basePrice
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         } else if(sublistValue == "87"){
            //             var number = basePrice
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         } else if(sublistValue == "88"){
            //             var number = basePrice
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "95"){
            //             var number = basePrice
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "94"){
            //             var number = folletN * 1.092896
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }
            //         else if(sublistValue == "96"){
            //             var number = basePrice
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "5"){
            //             var number = onefourtyN * 1.162791
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "64"){
            //             var number = basePrice
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "91"){
            //             var number = basePrice
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "68"){
            //             var number = flcPrice
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "98"){
            //             var number = fanInVenue
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }else if(sublistValue == "97"){
            //             var number = fanaticsPrice
            //             currentRecord.setSublistValue({
            //                 sublistId:priceID,
            //                 fieldId:'price_1_',
            //                 line: i,
            //                 value:  Number(Math.round(number+'e2')+'e-2')
            //             })
            //         }
            //
            //
            //
            //
            //
            //     }
            // }
        }

        /**
         * Defines the function definition that is executed before record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const beforeSubmit = (scriptContext) => {
            var currentRecord = scriptContext.newRecord

            var idLookUp = currentRecord.getValue({fieldId: 'custitem_nsacs_lf_style_name'})

            if(idLookUp){



            var fieldLookUp = search.lookupFields({
                type: search.Type.INVENTORY_ITEM,
                id: idLookUp,
                columns: ['name','custitem6','custitem7', 'custitem8','custitem9','custitem10', 'custitem12', 'custitem13',
                    'custitem14', 'custitem15', 'custitem11']
            });

            var priceID = 'price1'

            var basePrice = fieldLookUp.custitem6

            var onefourtyN = fieldLookUp.custitem7

            var fourtyEightN = fieldLookUp.custitem8

            var seventyTwoN = fieldLookUp.custitem9

            var folletN = fieldLookUp.custitem10

            var mDenPrice = fieldLookUp.custitem12

            var rallyHousePrice = fieldLookUp.custitem13

            var fanaticsPrice = fieldLookUp.custitem14

            var fanInVenue = fieldLookUp.custitem15

            var flcPrice = fieldLookUp.custitem11



            for( var i = 0; i <= 200 ; i++){

                var sublistValue = currentRecord.getSublistValue({
                    sublistId: priceID,
                    fieldId: 'pricelevel',
                    line: i
                })

                if(sublistValue == "1"){
                    var number = onefourtyN * 1.111111
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if (sublistValue == "2"){
                    var number = onefourtyN * 1.123596
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "3"){
                    var number = onefourtyN * 1.136364
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "4"){
                    var number = onefourtyN * 1.136364
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "5"){
                    var number = onefourtyN * 1.149425
                   currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "6"){
                    var number = onefourtyN * 1.162791
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "7"){
                    var number = onefourtyN * 1.176471
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "8"){
                    var number = onefourtyN * 1.190476
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue =="9"){
                    var number = onefourtyN * 1.204819
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:   Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "10"){
                    var number = onefourtyN * 1.219512
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "11"){
                    var number = onefourtyN * 1.25
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "12"){
                    var number = onefourtyN * 1.265823
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "13"){
                    var number = onefourtyN * 1.315789
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "14"){
                    var number = onefourtyN * 1.333333
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "15"){
                    var number = onefourtyN * 1.081081
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "16"){
                    var number = onefourtyN * 1.315789
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue =="17"){
                    var number = onefourtyN * 1.086957
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "18"){
                    var number = onefourtyN * 1.098901
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "19"){
                    var number = onefourtyN
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "20"){
                    var number = onefourtyN * 1.1
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "21"){
                    var number = onefourtyN * 1.07
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "22"){
                    var number = fourtyEightN * 1.111111
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "23"){
                    //48 11%
                    var number = fourtyEightN * 1.123596
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "24"){
                    var number = fourtyEightN * 1.136364
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "25"){
                    var number = fourtyEightN * 1.149425
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "21"){
                    var number = onefourtyN * 1.07
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "22"){
                    var number = onefourtyN * 1.111111
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "23"){
                    var number = onefourtyN * 1.123596
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "24"){
                    var number = onefourtyN * 1.136364
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "25"){
                    var number = onefourtyN * 1.149425
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "26"){
                    var number = onefourtyN * 1.162791
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "27"){
                    var number = onefourtyN * 1.176471
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "28"){
                    var number = onefourtyN * 1.190476
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "29"){
                    var number = onefourtyN * 1.204819
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "30"){
                    var number = onefourtyN * 1.219512
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "31"){
                    var number = onefourtyN * 1.25
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "32"){
                    var number = fourtyEightN * 1.282051
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "33"){
                    var number = fourtyEightN * 1.298701
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "34"){
                    var number = fourtyEightN * 1.315789
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "35"){
                    var number = fourtyEightN * 1.081081
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "36"){
                    var number = fourtyEightN * 1.075269
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "37"){
                    var number = fourtyEightN * 1.081081
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "38"){
                    var number = fourtyEightN * 1.086957
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "39"){
                    var number = fourtyEightN * 1.098901
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "92"){
                    var number = 0
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "40"){
                    var number = fourtyEightN
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "41"){
                    var number = fourtyEightN * 1.1
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "42"){
                    var number = fourtyEightN * 1.07
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "43"){
                    var number = seventyTwoN* 1.111111
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "44"){
                    var number = seventyTwoN * 1.111111
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "45"){
                    var number = seventyTwoN * 1.123596
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "46"){
                    var number = seventyTwoN * 1.149425
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "47"){
                    var number = seventyTwoN * 1.162791
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "48"){
                    var number = seventyTwoN * 1.176471
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "49"){
                    var number = seventyTwoN * 1.190476
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "50"){
                    var number = seventyTwoN * 1.204819
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "51"){
                    var number = seventyTwoN * 1.219512
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "52"){
                    var number = seventyTwoN * 1.25
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "53"){
                    var number = seventyTwoN * 1.282051
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "54"){
                    var number = seventyTwoN * 1.298701
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "55"){
                    var number = seventyTwoN * 1.315789
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "56"){
                    //72 25%
                    var number = seventyTwoN * 1.333333
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value: Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "57"){
                    var number = seventyTwoN * 1.075269
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "58"){
                    var number = seventyTwoN * 1.081081
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "59"){
                    var number = seventyTwoN * 1.086957
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "60"){
                    var number = seventyTwoN * 1.098901
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "61"){
                    var number = seventyTwoN
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "62"){
                    var number = seventyTwoN * 1.1
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }
                else if(sublistValue == "63"){
                    var number = seventyTwoN * 1.07
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "68"){
                    var number = flcPrice
                        currentRecord.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                }
                else if(sublistValue == "69"){
                    var number = folletN * 1.111111
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "89"){
                    var number = folletN * 1.111111
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "70"){
                    var number = folletN * 1.123596
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "90"){
                    var number = folletN * 1.129944
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "71"){
                    var number = folletN * 1.136364
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "72"){
                    var number = folletN * 1.149425
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "73"){
                    var number = folletN * 1.162791
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "74"){
                    var number = folletN * 1.176471
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "75"){
                    var number = folletN * 1.190476
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "76"){
                    var number = folletN * 1.204819
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "77"){
                    var number = folletN * 1.219512
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "78"){
                    var number = onefourtyN * 1.25
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "79"){
                    var number = onefourtyN * 1.282051
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "80"){
                    var number = onefourtyN * 1.298701
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "81"){
                    var number = onefourtyN * 1.315789
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "82"){
                    var number = onefourtyN * 1.333333
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value: Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "93"){
                    var number = onefourtyN * 1.06955
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "83"){
                    var number = onefourtyN * 1.075269
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "84"){
                    var number = onefourtyN * 1.081081
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "85"){
                    var number = onefourtyN * 1.092896
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "86"){
                    var number = onefourtyN * 1.098901
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "88"){
                    var number = basePrice
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "95"){
                    var number = basePrice
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                } else if(sublistValue == "87"){
                    var number = basePrice
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                } else if(sublistValue == "88"){
                    var number = basePrice
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "95"){
                    var number = basePrice
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "94"){
                    var number = folletN * 1.092896
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }
                else if(sublistValue == "96"){
                    var number = basePrice
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "5"){
                    var number = onefourtyN * 1.162791
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "64"){
                    var number = basePrice
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "91"){
                    var number = basePrice
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "68"){
                    var number = flcPrice
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "98"){
                    var number = fanInVenue
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }else if(sublistValue == "97"){
                    var number = fanaticsPrice
                    currentRecord.setSublistValue({
                        sublistId:priceID,
                        fieldId:'price_1_',
                        line: i,
                        value:  Number(Math.round(number+'e2')+'e-2')
                    })
                }





            }
            }





        }

        /**
         * Defines the function definition that is executed after record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const afterSubmit = (scriptContext) => {

        }

        return {beforeLoad, beforeSubmit, afterSubmit}

    });
