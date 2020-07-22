<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <h6>Family Name:</h6>
                <p>{{ family }}</p>

                <h6>Genus Name:</h6>
                <p>{{ genus }}</p>

                <h6>Full Name:</h6>
                <p>{{ genus }} {{ specie }}</p>
            </div>
            <div class="col-md-4">
                <div class="photo-box-container">
                    <div class="photo-box" @click="showMultiple">
                        <p v-if="images_loaded === 'loading'">Searching for Images...</p>
                        <p v-else-if="!images_loaded">No Images Found</p>
<!--                        <p v-else>No Images Found</p>-->
                    </div>
                    <div class="photo-box-behind"></div>
                </div>
                <VueEasyLightbox
                    :visible="visible"
                    :imgs="images"
                    :index="index"
                    @hide="handleHide"
                ></VueEasyLightbox>
            </div>
        </div>
    </div>
</template>

<script>
    import VueEasyLightbox from 'vue-easy-lightbox';

    export default {
        name: "species-show",
        data() {
            return {
                images: [],
                images_loaded: "loading",
                visible: false,
                index: 0
            }
        },
        methods: {
            fetchImages() {
                const proxyurl = "https://cors-anywhere.herokuapp.com/";
                let url = `http://sweetgum.nybg.org/science/vh/specimen-list/?DarFamily=${this.family}&DetGenusLocal_tab=${this.genus}&DetSpeciesLocal_tab=${this.specie}&ImagesOnly=yes`

                axios.get(proxyurl + url)
                    .then(data => {
                        let doc = new DOMParser().parseFromString(data.data, 'text/html');
                        const rows = doc.querySelectorAll("table.table-results tbody tr");
                        if (rows.length > 0){
                            this.images_loaded = true;
                            document.querySelector(".photo-box").classList.add('photo-box-image');
                            document.querySelector(".photo-box").style.backgroundImage = `url(${rows[0].querySelector('img').src.replace(/.thumb/, '')})`
                            document.querySelector(".photo-box-behind").classList.add('photo-box-image');

                            rows.forEach(row => {
                                console.log(row.querySelector('img').src);
                                this.images.push(row.querySelector('img').src.replace(/.thumb/, ''));
                            })
                        } else {
                            this.images_loaded = false;
                        }
                    })
                    .catch(err => console.log(err))
            },
            showMultiple() {
                this.index = 0  // index of imgList
                this.show()
            },
            show() {
                this.visible = true
            },
            handleHide() {
                this.visible = false
            }
        },
        mounted() {
            this.fetchImages();
        },
        components: {
            VueEasyLightbox,
        },
        props: {
            specie: {
                required: true
            },
            genus: {
                required: true
            },
            family: {
                required: true
            },
        }
    }
</script>

<style scoped lang="scss">
.photo-box-container{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        font-size: 20px;
    }

    .photo-box{
        width: 150px;
        height: 200px;
        border: 2px solid #282828;
        z-index: 2;
        background: #fff;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1rem;
        text-align: center;
        cursor: pointer;
    }

    .photo-box-image{
        background-repeat: no-repeat;
        background-size: 150px 200px;
        background-position: center;
    }

    .photo-box-behind{
        width: 150px;
        height: 200px;
        border: 2px solid #696969;
        z-index: 1;
        position: absolute;
        top: -55%;
        left: 53%;
        background: #fff;
        transform: translate(-50%, 50%);
    }
}
</style>
