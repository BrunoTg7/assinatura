window.Stripe = Stripe;

const stripe = Stripe('pk_test_51Qi88BI5SiUaDMJPMn4w9NaTz5vJTUAzIWLz9UpSGPQk5e4TuaVQJ2Qjo9RJgzYaAMyHo0sW8XmA93Yv3oAmecix00RPWckOb7'); // Substitua pela sua chave pública do Stripe

document.getElementById('subscription-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const plan = document.getElementById('plan').value;
    
    try {
        const response = await stripe.subscription.create({
            customer: email,
            items: [{ plan: plan }],
        });
        
        if (response.ok) {
            alert('Assinatura de teste criada com sucesso!');
            // Salvar as informações da assinatura
            const subscriptionData = {
                name: name,
                email: email,
                plan: plan,
                id: response.id,
                status: response.status,
                created: response.created,
            };
            console.log('Dados da assinatura:', subscriptionData);
        } else {
            alert('Erro ao criar assinatura de teste.');
        }
    } catch (error) {
        console.error('Erro:', error);
    }
});

