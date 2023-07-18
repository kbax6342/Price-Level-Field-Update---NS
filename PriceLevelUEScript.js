/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/currency', 'N/currentRecord', 'N/file', 'N/log', 'N/record', 'N/render', 'N/search', 'N/transaction', 'N/translation', 'N/url', 'N/util', 'N/task'],
    /**
 * @param{currency} currency
 * @param{currentRecord} currentRecord
 * @param{file} file
 * @param{log} log
 * @param{record} record
 * @param{render} render
 * @param{search} search
 * @param{transaction} transaction
 * @param{translation} translation
 * @param{url} url
 * @param{util} util
 */
    (currency, currentRecord, file, log, record, render, search, transaction, translation, url, util, task) => {
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

            var itemId = scriptContext.newRecord.id;
            var item = scriptContext.newRecord;

            var priceID = 'price1'

            var basePrice = item.getValue({
                fieldId: 'custitem6'
            }); //64

            var get144N = item.getValue({fieldId: 'custitem7'});
            var get48N = item.getValue({fieldId: 'custitem8'});
            var get72N = item.getValue({fieldId: 'custitem9'});
            var getFolletN = item.getValue({fieldId: 'custitem10'});
            var getMDEN = item.getValue({fieldId: 'custitem12'});
            var getRallyHouseN = item.getValue({fieldId: 'custitem13'});
            var getFanaticsN = item.getValue({fieldId: 'custitem14'});
            var getVenueN = item.getValue({fieldId: 'custitem15'});
            var getPriceN = item.getValue({fieldId: 'custitem11'});



            log.debug('144 price', get144N)

            if(!get144N){
                item.setValue({
                    fieldId: 'custitem7',
                    value : basePrice,
                    ignoreFieldChange: true
                })
            }

            if(!get48N){
                item.setValue({
                    fieldId: 'custitem8',
                    value : basePrice,
                    ignoreFieldChange: true
                })
            }

            if(!get72N){
                item.setValue({
                    fieldId: 'custitem9',
                    value : basePrice,
                    ignoreFieldChange: true
                })
            }

            if(!getFolletN){
                item.setValue({
                    fieldId: 'custitem9',
                    value : basePrice
                })
            }
            if(!getMDEN){
                item.setValue({
                    fieldId: 'custitem10',
                    value : basePrice
                })
            }

            if(!getRallyHouseN){
                item.setValue({
                    fieldId: 'custitem12',
                    value : basePrice
                })
            }

            if(!getFanaticsN){
                item.setValue({
                    fieldId: 'custitem13',
                    value : basePrice
                })
            }

            if(!getVenueN){
                item.setValue({
                    fieldId: 'custitem15',
                    value : basePrice
                })
            }

            if(!getPriceN){
                item.setValue({
                    fieldId: 'custitem11',
                    value : basePrice
                })
            }

            var onefourtyN = item.getValue({
                fieldId: 'custitem7'
            }) ; //17

            var fourtyEightN = item.getValue({
                fieldId: 'custitem8'
            }); //39

            var seventyTwoN = item.getValue({
                fieldId: 'custitem9'
            }); //60

            var folletN = item.getValue({
                fieldId: 'custitem10'
            }); //90

            var mDenPrice = item.getValue({
                fieldId: 'custitem12'
            })

            var rallyHousePrice = item.getValue({
                fieldId:'custitem13'
            })

            var fanaticsPrice = item.getValue({
                fieldId: 'custitem14'
            })

            var fanInVenue = item.getValue({
                fieldId: 'custitem15'
            })

            var flcPrice = item.getValue({
                fieldId: 'custitem11'
            })




            var sublistValueText = item.getSublistText({
                sublistId: priceID,
                fieldId: 'pricelevel',
                line: 1
            })

           var objField =  item.getSublistField({
                sublistId: priceID,
                fieldId: 'pricelevel',
                line: 5
            })



           for( var i = 0; i <= 200 ; i++){

               var sublistValue = item.getSublistValue({
                   sublistId: priceID,
                   fieldId: 'pricelevel',
                   line: i
               })
               if (sublistValue == "1") {
                   var number = onefourtyN * 1.111111
                   item.setSublistValue({
                       sublistId: 'price1',
                       fieldId: 'price_1_',
                       line: i,
                       value: Number(Math.round(number + 'e2') + 'e-2')
                   })
               } else if (sublistValue == "2") {
                   var number = onefourtyN * 1.123596
                   item.setSublistValue({
                       sublistId: 'price1',
                       fieldId: 'price_1_',
                       line: i,
                       value: Number(Math.round(number + 'e2') + 'e-2')
                   })
               } else if (sublistValue == "3") {
                   var number = onefourtyN * 1.136364
                   item.setSublistValue({
                       sublistId: 'price1',
                       fieldId: 'price_1_',
                       line: i,
                       value: Number(Math.round(number + 'e2') + 'e-2')
                   })
               } else if (sublistValue == "4") {
                   var number = onefourtyN * 1.149425
                   item.setSublistValue({
                       sublistId: 'price1',
                       fieldId: 'price_1_',
                       line: i,
                       value: Number(Math.round(number + 'e2') + 'e-2')
                   })
               } else if (sublistValue == "5") {
                   var number = onefourtyN * 1.149425
                   item.setSublistValue({
                       sublistId: 'price1',
                       fieldId: 'price_1_',
                       line: i,
                       value: Number(Math.round(number + 'e2') + 'e-2')
                   })
               }else if(sublistValue == "6"){
                   var number = onefourtyN * 1.176471
                   item.setSublistValue({
                       sublistId:'price1',
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "7"){
                   var number = onefourtyN * 1.176471
                   item.setSublistValue({
                       sublistId:'price1',
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "8"){
                   var number = onefourtyN * 1.204819
                   item.setSublistValue({
                       sublistId:'price1',
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue =="9"){
                   var number = onefourtyN * 1.219512
                   item.setSublistValue({
                       sublistId:'price1',
                       fieldId:'price_1_',
                       line: i,
                       value:   Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "10"){
                   var number = onefourtyN * 1.25
                   item.setSublistValue({
                       sublistId:'price1',
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "11"){
                   var number = onefourtyN * 1.282051
                   item.setSublistValue({
                       sublistId:'price1',
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "12"){
                   var number = onefourtyN * 1.298701
                   item.setSublistValue({
                       sublistId:'price1',
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "13"){
                   var number = onefourtyN * 1.315789
                   item.setSublistValue({
                       sublistId:'price1',
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "14"){
                   var number = onefourtyN * 1.333333
                   item.setSublistValue({
                       sublistId:'price1',
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "15"){
                   var number = onefourtyN * 1.075269
                   item.setSublistValue({
                       sublistId:'price1',
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "16"){
                   var number = onefourtyN * 1.081081
                   item.setSublistValue({
                       sublistId:'price1',
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })

               }else if(sublistValue =="17"){
                   var number = onefourtyN * 1.086957
                   item.setSublistValue({
                       sublistId:'price1',
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "18"){
                   var number = onefourtyN * 1.098901
                   item.setSublistValue({
                       sublistId:'price1',
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "19"){
                   var number = onefourtyN
                   item.setSublistValue({
                       sublistId:'price1',
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "20"){
                   var number = onefourtyN * 1.1
                   item.setSublistValue({
                       sublistId:'price1',
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "21"){
                   var number = onefourtyN * 1.07
                   item.setSublistValue({
                       sublistId:'price1',
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "22"){
                   var number = fourtyEightN * 1.111111
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "23"){
                   //48 11%
                   var number = fourtyEightN * 1.123596
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "24"){
                   var number = fourtyEightN * 1.136364
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "25"){
                   var number = fourtyEightN * 1.149425
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "26"){
                   var number = fourtyEightN * 1.162791
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "27"){
                   var number = fourtyEightN * 1.176471
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "28"){
                   var number = fourtyEightN * 1.190476
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "29"){
                   var number = fourtyEightN * 1.204819
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "30"){
                   var number = fourtyEightN * 1.219512
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "31"){
                   var number = fourtyEightN * 1.25
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "32"){
                   var number = fourtyEightN * 1.282051
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "33"){
                   var number = fourtyEightN * 1.298701
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "34"){
                   var number = fourtyEightN * 1.315789
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "35"){
                   var number = fourtyEightN * 1.333333
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "36"){
                   var number = fourtyEightN * 1.075269
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "37"){
                   var number = fourtyEightN * 1.081081
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "38"){
                   var number = fourtyEightN * 1.086957
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "39"){
                   var number = fourtyEightN * 1.098901
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "92"){
                   var number = 0
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "40"){
                   var number = fourtyEightN
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "41"){
                   var number = fourtyEightN * 1.1
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "42"){
                   var number = fourtyEightN * 1.07
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "43"){
                   var number = seventyTwoN* 1.111111
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "44"){
                   var number = seventyTwoN * 1.123596
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "45"){
                   var number = seventyTwoN * 1.136364
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "46"){
                   var number = seventyTwoN * 1.149425
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "47"){
                   var number = seventyTwoN * 1.162791
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "48"){
                   var number = seventyTwoN * 1.176471
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "49"){
                   var number = seventyTwoN * 1.190476
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "50"){
                   var number = seventyTwoN * 1.204819
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "51"){
                   var number = seventyTwoN * 1.219512
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "52"){
                   var number = seventyTwoN * 1.25
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "53"){
                   var number = seventyTwoN * 1.282051
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "54"){
                   var number = seventyTwoN * 1.298701
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "55"){
                   var number = seventyTwoN * 1.315789
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "56"){
                   //72 25%
                   var number = seventyTwoN * 1.333333
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value: Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "57"){
                   var number = seventyTwoN * 1.075269
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "58"){
                   var number = seventyTwoN * 1.081081
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "59"){
                   var number = seventyTwoN * 1.086957
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "60"){
                   var number = seventyTwoN * 1.098901
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "61"){
                   var number = seventyTwoN
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "62"){
                   var number = seventyTwoN * 1.1
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }
               else if(sublistValue == "63"){
                   var number = seventyTwoN * 1.07
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "68"){
                   var number = flcPrice
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }
               else if(sublistValue == "69"){
                   var number = folletN * 1.111111
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "89"){
                   var number = folletN * 1.111111
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "70"){
                   var number = folletN * 1.123596
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "90"){
                   var number = folletN * 1.129944
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "71"){
                   var number = folletN * 1.136364
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "72"){
                   var number = folletN * 1.149425
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "73"){
                   var number = folletN * 1.162791
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "74"){
                   var number = folletN * 1.176471
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "75"){
                   var number = folletN * 1.190476
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "76"){
                   var number = folletN * 1.204819
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "77"){
                   var number = folletN * 1.219512
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "78"){
                   var number = folletN * 1.25
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "79"){
                   var number = folletN * 1.282051
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "80"){
                   var number = folletN * 1.298701
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "81"){
                   var number = folletN * 1.315789
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "82"){
                   var number = folletN * 1.333333
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value: Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "93"){
                   var number = folletN * 1.06955
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "83"){
                   var number = folletN * 1.075269
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "84"){
                   var number = folletN * 1.081081
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "85"){
                   var number = folletN * 1.092896
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "86"){
                   var number = folletN * 1.098901
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "88"){
                   var number = mDenPrice;
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "95"){
                   var number = 0
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               } else if(sublistValue == "87"){
                   var number = folletN
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               } else if(sublistValue == "88"){
                   var number = mDenPrice
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "95"){
                   var number = 0
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "94"){
                   var number = folletN * 1.092896
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }
               else if(sublistValue == "96"){
                   var number = rallyHousePrice
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "5"){
                   var number = onefourtyN * 1.162791
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "64"){
                   var number = 0
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "91"){
                   var number = basePrice
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "68"){
                   var number = flcPrice
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "98"){
                   var number = fanInVenue
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
               }else if(sublistValue == "97"){
                   var number = fanaticsPrice
                   item.setSublistValue({
                       sublistId:priceID,
                       fieldId:'price_1_',
                       line: i,
                       value:  Number(Math.round(number+'e2')+'e-2')
                   })
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

            //this is creating a task to submit the record id to a map reduce script
            const mrTask = task.create({
                taskType: task.TaskType.MAP_REDUCE,
                scriptId: 'customscript1194',
                params: {
                    custscript_item_id: scriptContext.newRecord.id
                }
            });
            //submit the task and run the task
            mrTask.submit();

        }

        return {beforeLoad, beforeSubmit, afterSubmit}

    });
