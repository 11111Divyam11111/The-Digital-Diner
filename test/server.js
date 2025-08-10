// benchmark-gateway.js

const autocannon = require('autocannon')

function runBenchmark() {
  const url = 'http://localhost:3003/user'

  const instance = autocannon({
    url: url,
    duration : 30,
  })

  instance.on('start', () => {
    console.log(`🚀 Starting benchmark for ${url}`)
  })

  instance.on('done', (result) => {
    console.log('\n✅ Benchmark complete!')
    console.log('📊 Results:', result);
    console.log(`Requests/sec: ${result.requests.average}`)
    console.log(`Latency (avg): ${result.latency.average} ms`)
    console.log(`Throughput (avg): ${Math.round(result.throughput.average / 1024)} KB/sec`)
  })
}

runBenchmark()
