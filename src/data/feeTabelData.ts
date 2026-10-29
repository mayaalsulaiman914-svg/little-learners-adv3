interface Fee {
    program: string,
    ageGroup:string,
    annualTuition : string,
    registrationFee : string,
    activityFee : string

};

interface Service {
name : string,
price: string
}

export const fees: Fee[] = [
    {
        program:"Nursery",
        ageGroup :"2 - 3 Years",
        annualTuition:"$1,686",
        registrationFee:"$162",
        activityFee:"$12"
    },
    {
        program:"Pre - Kindergartens",
        ageGroup :"3 - 4 Years",
        annualTuition:"$2,686",
        registrationFee:"$220",
        activityFee:"$16"
    },
    {
        program:"Kindergarten",
        ageGroup :"4 - 5 Years",
        annualTuition:"$3,686",
        registrationFee:"$340",
        activityFee:"$20"
    },

]

export const services : Service[] =[
    {
        name:"Before and After-School Care",
        price:"$120 / per month"
    },
    {
        name:"Before and After-School Care",
        price:"$120 / per month"
    },
    {
        name:"Before and After-School Care",
        price:"$120 / per month"
    },
] 
