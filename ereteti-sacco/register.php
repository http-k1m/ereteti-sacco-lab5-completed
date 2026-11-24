<?php
$page_title = 'Apply for membership';
include 'includes/header.php';
?>

  <main>
    <p>Fill in your details below to apply for membership in Ereteti Dairy Sacco.</p>

    <form action="process-register.php" method="post">
      <label for="first_name">First name</label>
      <input type="text" id="first_name" name="first_name" required>

      <label for="last_name">Last name</label>
      <input type="text" id="last_name" name="last_name" required>

      <label for="phone">Phone number</label>
      <input type="tel" id="phone" name="phone" placeholder="0720 000 000" required>

      <label for="route">Collection route</label>
      <select id="route" name="route" required>
        <option value="">Choose a route</option>
        <option value="1">Kiserian</option>
        <option value="2">Ngong</option>
        <option value="3">Rongai</option>
      </select>

      <button type="submit">Apply to join</button>
    </form>
  </main>

<?php include 'includes/footer.php'; ?>
