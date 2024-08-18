import { MotorcyclesDTO } from "src/simplimuv/products/dto/motorcycle.dto";
import { Motorcycle } from "src/simplimuv/products/entities/motorcycle.entity";

export class MapProducts {
    static dtoToEntity(params:MotorcyclesDTO) {
        const newReg = new Motorcycle();
        //console.log(params?.type?.name);
        newReg.uuid = params.uuid;
        newReg.name = params.name || '';
        // TODO: Setear objetos y arrays en la entidad
        newReg.brand = {
            uuid: params?.brand?.uuid ?? '',
            name: params?.brand?.name ?? ''
        };
        newReg.uid = params.uid;
        /* newReg.seller.metadata = params?.seller?.metadata;
        newReg.seller.name = params?.seller?.name || '';
        newReg.seller.uuid = params?.seller?.uuid; */
        newReg.slug = params.slug;
        newReg.metadata = params.metadata;
        /* newReg.brand.uuid = params?.brand?.uuid;
        newReg.brand.name = params?.brand?.name || ''; */
        newReg.used = params.used;
        newReg.featured = params.featured;
        newReg.favourite = params.favourite;
        /*
            "categories" : [
                    {
                        "name": "Motos",
                        "locale": "es",
                        "uuid": "3b7509f0-1c2a-42d2-b4e6-ac23cebba737"
                    },
                    {
                        "name": "Cars",
                        "locale": "es",
                        "uuid": "3b7509f0-1c2a-42d2-b4e6-ac23cebba738"
                    }
            ]
        */
        //console.log(MapProducts.getCategories(params.categories))
        newReg.categories = MapProducts.getCategories(params.categories);
        newReg.variants = null;

        return newReg;
    }

    private static getCategories(categories: MotorcyclesDTO['categories']){
        return categories.map(cat => cat);
    }

    private getVarians(variants: MotorcyclesDTO['variants']){

    }
}