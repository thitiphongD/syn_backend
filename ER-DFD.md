## ER diagram Visitors database

![Visitors Table Diagram](/er.png)

### Columns:

1. **id:**

   - This column represents a unique identifier for each visitor.

2. **ipAddress:**

   - Stores the IP address of the visitors.

3. **device:**

   - Stores information about the device used by the visitor (e.g., PC, mobile, tablet).

4. **browser:**

   - Stores information about the web browser used by the visitor (e.g., browser name and version).

5. **accessAt:**
   - Represents a timestamp indicating when the visitor accessed the system.

### Description:

The "visitors" table is designed to store information about each visit to a website. Each row in the table represents a unique visitor, and the columns capture various details about the visit, including a unique identifier, IP address, device information, browser information, and the timestamp of the visit.

## Level 0 DFD: Visitor Visit Website

![Visitors DFD Level 0](/dfd-level-0.png)

### Processes:

1. **Visitor Visit Website:**

   - When a visitor comes to the website.

2. **Process and Store Data:**
   - System processes visitor data and saves it in the database.

### Data Stores:

1. **Database:**
   - Where system stores visitor information.

### Data Flows:

1. **Visitor Data:**

   - Information from the visitor to the system.

2. **Processed Data:**
   - Data processed and saved in the database.

### Description:

- Visitor interacts with the website ("Visitor Visit Website").
- System processes the visitor's data and saves it in the database ("Process and Store Data").
- Data flows from the visitor to the system ("Visitor Data") and from processing to the database ("Processed Data").
