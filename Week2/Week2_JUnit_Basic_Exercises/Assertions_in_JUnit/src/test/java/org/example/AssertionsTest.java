package org.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {

        // Assert that two values are equal
        assertEquals(5, 2 + 3);

        // Assert that the condition is true
        assertTrue(5 > 3);

        // Assert that the condition is false
        assertFalse(5 < 3);

        // Assert that an object is null
        assertNull(null);

        // Assert that an object is NOT null
        assertNotNull(new Object());
    }
}
