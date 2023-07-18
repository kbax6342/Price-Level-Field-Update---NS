/**
 * @NApiVersion 2.1
 * @NScriptType MapReduceScript
 */
define(['N/log', 'N/record', 'N/runtime', 'N/search', 'N/currentRecord'],
    /**
 * @param{log} log
 * @param{record} record
 * @param{runtime} runtime
 * @param{search} search
 */
    (log, record, runtime, search, currentRecord) => {
        /**
         * Defines the function that is executed at the beginning of the map/reduce process and generates the input data.
         * @param {Object} inputContext
         * @param {boolean} inputContext.isRestarted - Indicates whether the current invocation of this function is the first
         *     invocation (if true, the current invocation is not the first invocation and this function has been restarted)
         * @param {Object} inputContext.ObjectRef - Object that references the input data
         * @typedef {Object} ObjectRef
         * @property {string|number} ObjectRef.id - Internal ID of the record instance that contains the input data
         * @property {string} ObjectRef.type - Type of the record instance that contains the input data
         * @returns {Array|Object|Search|ObjectRef|File|Query} The input data to use in the map/reduce process
         * @since 2015.2
         */

        const getInputData = (inputContext) => {
          var data = runtime.getCurrentScript().getParameter('custscript_item_id')

            var assemblyitemSearchObj = search.create({
                type: "assemblyitem",
                filters:
                    [
                        ["type","anyof","Assembly"],
                        "AND",
                        ["isinactive","is","F"],
                        "AND",
                        ["custitem_nsacs_lf_style_name","anyof", data]
                    ],
                columns:
                    [
                        search.createColumn({
                            name: "itemid",
                            sort: search.Sort.ASC
                        }),
                        "displayname",
                        "salesdescription",
                        "type",
                        "baseprice",
                        "custitem_atlas_item_planner",
                        "custitem_lf_weld_list",
                        "custitem_sps_item_synch",
                        "custitem_lf_royalty_code",
                        "custitem_lf_art_approval_checkbox",
                        "custitem_nsacs_lf_style_name",
                        "custitem_lf_art_approval"
                    ]
            });


            return assemblyitemSearchObj;

        }

        /**
         * Defines the function that is executed when the map entry point is triggered. This entry point is triggered automatically
         * when the associated getInputData stage is complete. This function is applied to each key-value pair in the provided
         * context.
         * @param {Object} mapContext - Data collection containing the key-value pairs to process in the map stage. This parameter
         *     is provided automatically based on the results of the getInputData stage.
         * @param {Iterator} mapContext.errors - Serialized errors that were thrown during previous attempts to execute the map
         *     function on the current key-value pair
         * @param {number} mapContext.executionNo - Number of times the map function has been executed on the current key-value
         *     pair
         * @param {boolean} mapContext.isRestarted - Indicates whether the current invocation of this function is the first
         *     invocation (if true, the current invocation is not the first invocation and this function has been restarted)
         * @param {string} mapContext.key - Key to be processed during the map stage
         * @param {string} mapContext.value - Value to be processed during the map stage
         * @since 2015.2
         */

        const map = (mapContext) => {
            try{
                var assemblyItemId = mapContext.key
                var data = runtime.getCurrentScript().getParameter('custscript_item_id')

                var assemblyItem = record.load({
                    type: record.Type.ASSEMBLY_ITEM,
                    id: assemblyItemId,
                    isDynamic: false
                })


                var fieldLookUp = search.lookupFields({
                    type: search.Type.INVENTORY_ITEM,
                    id: data,
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





                //all of the columns for that line in the saved search
                var values = JSON.parse(mapContext.value)

                for (var i = 0; i <= 150; i++) {


                    var sublistValue = assemblyItem.getSublistValue({
                        sublistId: 'price1',
                        fieldId: 'pricelevel',
                        line: i
                    })

                    var sublistValue = assemblyItem.getSublistValue({
                        sublistId: priceID,
                        fieldId: 'pricelevel',
                        line: i
                    })
                    if (sublistValue == "1") {
                        var number = onefourtyN * 1.111111
                        assemblyItem.setSublistValue({
                            sublistId: 'price1',
                            fieldId: 'price_1_',
                            line: i,
                            value: Number(Math.round(number + 'e2') + 'e-2')
                        })
                    } else if (sublistValue == "2") {
                        var number = onefourtyN * 1.123596
                        assemblyItem.setSublistValue({
                            sublistId: 'price1',
                            fieldId: 'price_1_',
                            line: i,
                            value: Number(Math.round(number + 'e2') + 'e-2')
                        })
                    } else if (sublistValue == "3") {
                        var number = onefourtyN * 1.136364
                        assemblyItem.setSublistValue({
                            sublistId: 'price1',
                            fieldId: 'price_1_',
                            line: i,
                            value: Number(Math.round(number + 'e2') + 'e-2')
                        })
                    } else if (sublistValue == "4") {
                        var number = onefourtyN * 1.149425
                        assemblyItem.setSublistValue({
                            sublistId: 'price1',
                            fieldId: 'price_1_',
                            line: i,
                            value: Number(Math.round(number + 'e2') + 'e-2')
                        })
                    } else if (sublistValue == "5") {
                        var number = onefourtyN * 1.149425
                        assemblyItem.setSublistValue({
                            sublistId: 'price1',
                            fieldId: 'price_1_',
                            line: i,
                            value: Number(Math.round(number + 'e2') + 'e-2')
                        })
                    }else if(sublistValue == "6"){
                        var number = onefourtyN * 1.176471
                        assemblyItem.setSublistValue({
                            sublistId:'price1',
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "7"){
                        var number = onefourtyN * 1.176471
                        assemblyItem.setSublistValue({
                            sublistId:'price1',
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "8"){
                        var number = onefourtyN * 1.204819
                        assemblyItem.setSublistValue({
                            sublistId:'price1',
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue =="9"){
                        var number = onefourtyN * 1.219512
                        assemblyItem.setSublistValue({
                            sublistId:'price1',
                            fieldId:'price_1_',
                            line: i,
                            value:   Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "10"){
                        var number = onefourtyN * 1.25
                        assemblyItem.setSublistValue({
                            sublistId:'price1',
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "11"){
                        var number = onefourtyN * 1.282051
                        assemblyItem.setSublistValue({
                            sublistId:'price1',
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "12"){
                        var number = onefourtyN * 1.298701
                        assemblyItem.setSublistValue({
                            sublistId:'price1',
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "13"){
                        var number = onefourtyN * 1.315789
                        assemblyItem.setSublistValue({
                            sublistId:'price1',
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "14"){
                        var number = onefourtyN * 1.333333
                        assemblyItem.setSublistValue({
                            sublistId:'price1',
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "15"){
                        var number = onefourtyN * 1.075269
                        assemblyItem.setSublistValue({
                            sublistId:'price1',
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "16"){
                        var number = onefourtyN * 1.081081
                        assemblyItem.setSublistValue({
                            sublistId:'price1',
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })

                    }else if(sublistValue =="17"){
                        var number = onefourtyN * 1.086957
                        assemblyItem.setSublistValue({
                            sublistId:'price1',
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "18"){
                        var number = onefourtyN * 1.098901
                        assemblyItem.setSublistValue({
                            sublistId:'price1',
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "19"){
                        var number = onefourtyN
                        assemblyItem.setSublistValue({
                            sublistId:'price1',
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "20"){
                        var number = onefourtyN * 1.1
                        assemblyItem.setSublistValue({
                            sublistId:'price1',
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "21"){
                        var number = onefourtyN * 1.07
                        assemblyItem.setSublistValue({
                            sublistId:'price1',
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "22"){
                        var number = fourtyEightN * 1.111111
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "23"){
                        //48 11%
                        var number = fourtyEightN * 1.123596
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "24"){
                        var number = fourtyEightN * 1.136364
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "25"){
                        var number = fourtyEightN * 1.149425
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "26"){
                        var number = fourtyEightN * 1.162791
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "27"){
                        var number = fourtyEightN * 1.176471
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "28"){
                        var number = fourtyEightN * 1.190476
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "29"){
                        var number = fourtyEightN * 1.204819
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "30"){
                        var number = fourtyEightN * 1.219512
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "31"){
                        var number = fourtyEightN * 1.25
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "32"){
                        var number = fourtyEightN * 1.282051
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "33"){
                        var number = fourtyEightN * 1.298701
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "34"){
                        var number = fourtyEightN * 1.315789
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "35"){
                        var number = fourtyEightN * 1.333333
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "36"){
                        var number = fourtyEightN * 1.075269
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "37"){
                        var number = fourtyEightN * 1.081081
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "38"){
                        var number = fourtyEightN * 1.086957
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "39"){
                        var number = fourtyEightN * 1.098901
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "92"){
                        var number = 0
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "40"){
                        var number = fourtyEightN
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "41"){
                        var number = fourtyEightN * 1.1
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "42"){
                        var number = fourtyEightN * 1.07
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "43"){
                        var number = seventyTwoN* 1.111111
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "44"){
                        var number = seventyTwoN * 1.123596
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "45"){
                        var number = seventyTwoN * 1.136364
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "46"){
                        var number = seventyTwoN * 1.149425
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "47"){
                        var number = seventyTwoN * 1.162791
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "48"){
                        var number = seventyTwoN * 1.176471
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "49"){
                        var number = seventyTwoN * 1.190476
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "50"){
                        var number = seventyTwoN * 1.204819
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "51"){
                        var number = seventyTwoN * 1.219512
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "52"){
                        var number = seventyTwoN * 1.25
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "53"){
                        var number = seventyTwoN * 1.282051
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "54"){
                        var number = seventyTwoN * 1.298701
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "55"){
                        var number = seventyTwoN * 1.315789
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "56"){
                        //72 25%
                        var number = seventyTwoN * 1.333333
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value: Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "57"){
                        var number = seventyTwoN * 1.075269
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "58"){
                        var number = seventyTwoN * 1.081081
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "59"){
                        var number = seventyTwoN * 1.086957
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "60"){
                        var number = seventyTwoN * 1.098901
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "61"){
                        var number = seventyTwoN
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "62"){
                        var number = seventyTwoN * 1.1
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }
                    else if(sublistValue == "63"){
                        var number = seventyTwoN * 1.07
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "68"){
                        var number = flcPrice
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }
                    else if(sublistValue == "69"){
                        var number = folletN * 1.111111
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "89"){
                        var number = folletN * 1.111111
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "70"){
                        var number = folletN * 1.123596
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "90"){
                        var number = folletN * 1.129944
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "71"){
                        var number = folletN * 1.136364
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "72"){
                        var number = folletN * 1.149425
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "73"){
                        var number = folletN * 1.162791
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "74"){
                        var number = folletN * 1.176471
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "75"){
                        var number = folletN * 1.190476
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "76"){
                        var number = folletN * 1.204819
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "77"){
                        var number = folletN * 1.219512
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "78"){
                        var number = folletN * 1.25
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "79"){
                        var number = folletN * 1.282051
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "80"){
                        var number = folletN * 1.298701
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "81"){
                        var number = folletN * 1.315789
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "82"){
                        var number = folletN * 1.333333
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value: Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "93"){
                        var number = folletN * 1.06955
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "83"){
                        var number = folletN * 1.075269
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "84"){
                        var number = folletN * 1.081081
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "85"){
                        var number = folletN * 1.092896
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "86"){
                        var number = folletN * 1.098901
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "88"){
                        var number = mDenPrice;
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "95"){
                        var number = 0
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    } else if(sublistValue == "87"){
                        var number = folletN
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    } else if(sublistValue == "88"){
                        var number = mDenPrice
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "95"){
                        var number = 0
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "94"){
                        var number = folletN * 1.092896
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }
                    else if(sublistValue == "96"){
                        var number = rallyHousePrice
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "5"){
                        var number = onefourtyN * 1.162791
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "64"){
                        var number = 0
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "91"){
                        var number = basePrice
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "68"){
                        var number = flcPrice
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "98"){
                        var number = fanInVenue
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }else if(sublistValue == "97"){
                        var number = fanaticsPrice
                        assemblyItem.setSublistValue({
                            sublistId:priceID,
                            fieldId:'price_1_',
                            line: i,
                            value:  Number(Math.round(number+'e2')+'e-2')
                        })
                    }

                }
                assemblyItem.save()
            }catch (e) {
                log.error( { title: 'map - error', details: { 'error': e } } );
            }



        }

        /**
         * Defines the function that is executed when the reduce entry point is triggered. This entry point is triggered
         * automatically when the associated map stage is complete. This function is applied to each group in the provided context.
         * @param {Object} reduceContext - Data collection containing the groups to process in the reduce stage. This parameter is
         *     provided automatically based on the results of the map stage.
         * @param {Iterator} reduceContext.errors - Serialized errors that were thrown during previous attempts to execute the
         *     reduce function on the current group
         * @param {number} reduceContext.executionNo - Number of times the reduce function has been executed on the current group
         * @param {boolean} reduceContext.isRestarted - Indicates whether the current invocation of this function is the first
         *     invocation (if true, the current invocation is not the first invocation and this function has been restarted)
         * @param {string} reduceContext.key - Key to be processed during the reduce stage
         * @param {List<String>} reduceContext.values - All values associated with a unique key that was passed to the reduce stage
         *     for processing
         * @since 2015.2
         */
        const reduce = (reduceContext) => {

        }


        /**
         * Defines the function that is executed when the summarize entry point is triggered. This entry point is triggered
         * automatically when the associated reduce stage is complete. This function is applied to the entire result set.
         * @param {Object} summaryContext - Statistics about the execution of a map/reduce script
         * @param {number} summaryContext.concurrency - Maximum concurrency number when executing parallel tasks for the map/reduce
         *     script
         * @param {Date} summaryContext.dateCreated - The date and time when the map/reduce script began running
         * @param {boolean} summaryContext.isRestarted - Indicates whether the current invocation of this function is the first
         *     invocation (if true, the current invocation is not the first invocation and this function has been restarted)
         * @param {Iterator} summaryContext.output - Serialized keys and values that were saved as output during the reduce stage
         * @param {number} summaryContext.seconds - Total seconds elapsed when running the map/reduce script
         * @param {number} summaryContext.usage - Total number of governance usage units consumed when running the map/reduce
         *     script
         * @param {number} summaryContext.yields - Total number of yields when running the map/reduce script
         * @param {Object} summaryContext.inputSummary - Statistics about the input stage
         * @param {Object} summaryContext.mapSummary - Statistics about the map stage
         * @param {Object} summaryContext.reduceSummary - Statistics about the reduce stage
         * @since 2015.2
         */
        const summarize = (summaryContext) => {

        }

        return {getInputData, map, reduce, summarize}

    });
