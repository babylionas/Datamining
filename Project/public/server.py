import json
from http.server import BaseHTTPRequestHandler, HTTPServer

# ไฟล์ JSON ที่จะโหลด
JSON_FILE = "C:/code/Datamining/model/best_model_params.json"

class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/model':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            with open(JSON_FILE, 'rb') as file:
                self.wfile.write(file.read())
        elif self.path == '/':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            with open('index.html', 'rb') as file:
                self.wfile.write(file.read())
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b'Not Found')

def run():
    server_address = ('localhost', 8000)
    httpd = HTTPServer(server_address, RequestHandler)
    print('Starting server...')
    httpd.serve_forever()

if __name__ == '__main__':
    run()
