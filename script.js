let arr = [
    {
        name: "noodles",
        category: "snacks",
        calorie: 350,
        isJunk: true,
        url: "https://www.sagargairefastfoodcorner.com/images/mob-slider7.jpg",
    },
    {
        name: "burger",
        category: "snacks",
        calorie: 400,
        isJunk: true,
        url: "https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886",
    },
    {
        name: "momos",
        category: "snacks",
        calorie: 200,
        isJunk: true,
        url: "https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
    },
    {
        name: "maggi",
        category: "snacks",
        calorie: 250,
        isJunk: true,
        url: "https://im.rediff.com/getahead/2020/sep/29burnt-garlic-chilli-maggi.jpg",
    },
    {
        name: "bread-omlette",
        category: "breakfast",
        calorie: 300,
        isJunk: false,
        url: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/02/10/0/FNK_One-Pan-Egg-Cheese-Omelet-Sandwich_H1_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1581344859765.jpeg",
    },
    {
        name: "french-toast",
        category: "breakfast",
        calorie: 350,
        isJunk: false,
        url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-make-french-toast-1589827448.jpg?crop=0.522xw:0.523xh;0.179xw,0.329xh&resize=980:*",
    },
    {
        name: "pancakes",
        category: "breakfast",
        calorie: 500,
        isJunk: true,
        url: "https://www.wholesomeyum.com/wp-content/uploads/2018/04/wholesomeyum-Easy-Keto-Almond-Flour-Pancakes-Recipe-24.jpg",
    },
    {
        name: "Dosa",
        category: "breakfast",
        calorie: 200,
        isJunk: false,
        url: "https://www.shutterstock.com/image-photo/homemade-dosa-dhosa-masala-plain-260nw-1597787986.jpg"
    }
];

function filter(category) {
    document.querySelector(".container").innerHTML = " ";

    if (category === "breakfast") {
        arr.filter((item) => {
            if (item.category === "breakfast") {
                document.querySelector(
                    ".container"
                ).innerHTML += `<div class="card hover13" style="width: 19rem;">
                                    <figure> <img src="${item.url}" height="190px"
                                    class="card-img-top" alt="${item.name}-image"> </figure>
                                <div class="card-body">
                                    <h5 class="card-title"> <strong> ${item.name} </strong> (${item.category}) </h5>
                                    <p class="card-text"> Calorie - ${item.calorie} </p>
                                </div>
                                </div>`;
            }
        });
    } else if (category === "calorie") {
        arr.filter((item) => {
            if (item.calorie < 300) {
                document.querySelector(
                    ".container"
                ).innerHTML += `<div class="card hover13" style="width: 19rem;">
                                    <figure><img src="${item.url}" height="190px"
                                    class="card-img-top" alt="${item.name}-image"></figure>
                                <div class="card-body">
                                    <h5 class="card-title"> <strong> ${item.name} </strong> (${item.category}) </h5>
                                    <p class="card-text"> Calorie - ${item.calorie} </p>
                                </div>
                                </div>`;
            }
        });
    } else if (category === "junk") {
        arr.filter((item) => {
            if (item.isJunk === true) {
                document.querySelector(
                    ".container"
                ).innerHTML +=
                 `<div class="card hover13" style="width: 19rem;">
                    <figure> <img src="${item.url}" height="190px"
                    class="card-img-top" alt="${item.name}-image"> </figure>
                <div class="card-body">
                    <h5 class="card-title"> <strong> ${item.name} </strong> (${item.category}) </h5>
                    <p class="card-text"> Calorie - ${item.calorie} </p>
                </div>
                </div>`;
            }
        });

    } else if (category === "all") {
        arr.filter((item) => {
            document.querySelector(
                ".container"
            ).innerHTML += 
            `<div class="card hover13" style="width: 19rem;">
                <figure><img src="${item.url}" height="190px"
                class="card-img-top" alt="${item.name}-image"></figure>
            <div class="card-body">
                <h5 class="card-title"> <strong> ${item.name} </strong> (${item.category}) </h5>
                <p class="card-text"> Calorie - ${item.calorie} </p>
            </div>
            </div>`;
        });
    }
}

filter("all")

document.querySelector(".breakfast").addEventListener("click", () => {
    filter("breakfast");
});

document.querySelector(".all").addEventListener("click", () => {
    filter("all");
});

document.querySelector(".calorie").addEventListener("click", () => {
    filter("calorie");
});

document.querySelector(".junk").addEventListener("click", () => {
    filter("junk");
});