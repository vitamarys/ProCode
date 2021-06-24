const formEl = document.forms.testFile;

formEl.addEventListener('submit', async (ev)=>{
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const {data} = await axios.post('/test', formData);
    console.log('response:', data);
})

