const AccessMetaValues= [ 
        _$valueType,
        _$Type,
        _$RuleList,
        _$Meta,
    ] = [
            "Rulled Meta Access..." ,
            'F-Log/E-Log/EndPoint' ,
            `RuleList Updated \n Morden Rules Allowed\n Encrypted data - access\n Meta -e -life -raga-18`,
            {
               _$momentType:'Strict Never Access',
               _$Range:'Speed_XD'
            }
        ]

const Moment = {
    myMoment:()=>{
        console.log("Moment - Accessed : PORT ^ 606")
        console.log(`
        [
            [
                {
                    AccessMode:[
                        Access Mode Allowed...,
                        Moment Created successfully...
                    ]
                }
            ]
        ]`)
    },
    CreateMoment:(..._$Dession)=>{
        const MomentDate = Date();
        console.log(`\n\n Accessing Redix kernal V - W \n Creating Moment... \n MomentDate : \n Date: ${MomentDate} `)
        const BuildMoment = [..._$Dession];
            console.log(BuildMoment)
        return Moment.myMoment()
    },
}
Moment.CreateMoment(AccessMetaValues)
