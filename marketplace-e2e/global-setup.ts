async function globalSetup() {
  const maxRetries = 30;
  const retryDelay = 2000;

  async function waitForServer(url: string, name: string): Promise<void> {
    for (let i = 0; i < maxRetries; i++) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          console.log(`✓ ${name} is ready at ${url}`);
          return;
        }
      } catch (error) {
        console.log(`Waiting for ${name} (attempt ${i + 1}/${maxRetries})...`);
      }
      await new Promise(resolve => setTimeout(resolve, retryDelay));
    }
    throw new Error(`${name} failed to start at ${url}`);
  }

  console.log('Waiting for servers to be ready...');
  await waitForServer('http://localhost:3000/api/health', 'API server');
  await waitForServer('http://localhost:4200', 'Marketplace app');
  console.log('All servers are ready! Starting tests...\n');
}

export default globalSetup;

