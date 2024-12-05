export const getProducts = () => {

        const mockData = [
            { id: 1, name: "Produto 1", description: "Descrição do produto 1" },
            { id: 2, name: "Produto 2", description: "Descrição do produto 2" },
            { id: 3, name: "Produto 3", description: "Descrição do produto 3" },
            { id: 5, name: "Produto 5", description: "Descrição do produto 5" },
        ];
        
        return new Promise((resolve) => setTimeout(resolve(mockData), 1000)); // Simula 1 segundo de espera

};