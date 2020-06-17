/*-------------------------------- Functions --------------------------------*/

var validIPAddress = function(IP) {
  function isValidIpV4(ip) {
    // const ipV4Match = new RegExp("25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?")
    // const splitIp = ip.split('.')
    // if (splitIp.length != 4) return false

    // splitIp.forEach(segment => {
    //   if (segment.startsWith("0")) return false
    //   if (ipV4Match.test(segment) === false) return false

    //   let segmentNum = parseInt(segment)
    //   if (isNaN(segmentNum)) return false
    // })
    // return "IPv4"
    if (IP.includes('.')) {
      let IPv4 = IP.split('.');
      const isDigits = string => [...string].every(c => '0123456789'.includes(c));
      // let regexCompare = /25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?/
      // let numbers = /25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9]/
      if (IPv4.length !== 4) return "Neither";
      for (let set of IPv4) {
          if (!isDigits(set)) return "Neither";
          if (set < 0 || set > 255) return "Neither";
          if (set.startsWith('0')) return "Neither";
          if (set.length < 1) return "Neither";
      }
      return "IPv4";
  }

  function isValidIpV6(ip) {
    const hexMatch = /^[a-f0-9]+$/i
    const splitIp = ip.split(":")
    if (splitIp.length != 8) return false

    splitIp.forEach(segment => {
      if (segment.length > 4) return false
      if (hexMatch.test(segment) === false) return false

      const segmentNum = parseInt(segment, 16)

      if (isNaN(segmentNum)) return false
    })
    return "IPv6"
  }
}
  return isValidIpV4(IP) || isValidIpV6(IP) || "Neither"
};
