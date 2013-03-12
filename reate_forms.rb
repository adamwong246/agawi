form_file_map = [
  {:alpha => '11tZod9VMTrWfzeEQGN42F8CQmq0o-Ub39vxU0gEqSos/viewform?embedded=false'},
  {:beta => '11tZod9VMTrWfzeEQGN42F8CQmq0o-Ub39vxU0gEqSos/viewform?embedded=false'},
  {:gamma => '11tZod9VMTrWfzeEQGN42F8CQmq0o-Ub39vxU0gEqSos/viewform?embedded=false'}
]

puts form_file_map.inspect

require 'net/http'

source = Net::HTTP.get('https://docs.google.com', "/a/sibblingz.com/forms/d/11tZod9VMTrWfzeEQGN42F8CQmq0o-Ub39vxU0gEqSos/viewform?embedded=false}")

