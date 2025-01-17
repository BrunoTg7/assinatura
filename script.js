window.Stripe = Stripe; // Certifique-se de que a biblioteca do Stripe está carregada antes dessa linha

const stripe = Stripe('pk_test_12345678901234567890123456789012345'); // Substitua pela sua chave pública do Stripe

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
            alert('Assinatura criada com sucesso!');
        } else {
            alert('Erro ao criar assinatura.');
        }
    } catch (error) {
        console.error('Erro:', error);
    }
});
