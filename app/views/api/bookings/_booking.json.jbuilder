json.extract! booking, :id, :start_date, :end_date, :status, :residents, :spot_id
json.start_date booking.start_date.strftime("%d %b %Y")
json.end_date booking.end_date.strftime("%d %b %Y")
